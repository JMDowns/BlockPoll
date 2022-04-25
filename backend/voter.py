from xrpl.clients import JsonRpcClient
from xrpl.models.requests.account_info import AccountInfo
import json
BASE_BALANCE = 1000000000 # test wallets start out with 1000 xrp or 1b drops
JSON_RPC_URL = "https://s.altnet.rippletest.net:51234/"
client = JsonRpcClient(JSON_RPC_URL)

accounts = {}

def print_acct_info(bucket_name, poll_id):
  acct_info = AccountInfo(
    account=accounts[bucket_name + poll_id],
    ledger_index="validated",
    strict=True,
  )
  response = client.request(acct_info)
  result = response.result
  print("response.status: ", response.status)
  print(json.dumps(response.result, indent=4, sort_keys=True))

def retreive_votes(bucket_name, poll_id):
  acct_info = AccountInfo(
    account=accounts[bucket_name + poll_id],
    ledger_index="validated",
    strict=True,
  )
  response = client.request(acct_info)
  # if response.status != "ResponseStatus.SUCCESS":
  #   print("ERROR retreiving vote count")
  # else:
  return int(response.result["account_data"]["Balance"]) - BASE_BALANCE

def load_accounts():
  f = open("accounts.txt", "r")
  file_contents = f.read().splitlines()
  for acct in file_contents:
    pair = acct.split(":")
    accounts[pair[0]] = pair[1]
  f.close()

def create_bucket(bucket_name, poll_id):
  if bucket_name + poll_id in accounts:
    print("Bucket with that name and poll already exists.")
  else:
    from xrpl.wallet import generate_faucet_wallet
    new_wallet = generate_faucet_wallet(client, debug=True)
    
    accounts[bucket_name + poll_id] = new_wallet.classic_address
    f = open("accounts.txt", "a")
    f.write(bucket_name + poll_id + ":" + new_wallet.classic_address + "\n")
    f.close()

def cast_vote(bucket_name, poll_id):
  print("Casting vote...")
  # Create a wallet from an existing set of keys:
  from xrpl.wallet import Wallet
  central_wallet = Wallet(seed="sEdTfrLUN5y648NwxkVGPd2eNaCrSQS", sequence=25122258) # central account info
  central_acct = central_wallet.classic_address # sending acct

  # Prepare payment
  from xrpl.models.transactions import Payment
  from xrpl.utils import xrp_to_drops
  my_tx_payment = Payment(
      account=central_acct,
      amount="1",
      destination=accounts[bucket_name + poll_id],
  )

  # Sign the transaction
  from xrpl.transaction import safe_sign_and_autofill_transaction
  my_tx_payment_signed = safe_sign_and_autofill_transaction(my_tx_payment, central_wallet, client)

  # Submit and send the transaction
  from xrpl.transaction import send_reliable_submission
  tx_response = send_reliable_submission(my_tx_payment_signed, client)


# create_bucket("vanilla", "0")
# create_bucket("chocolate", "0")
# load_accounts()
# print_acct_info(accounts["vanilla0"])
# cast_vote("vanilla", "0")
# print(retreive_votes("vanilla", "0"))