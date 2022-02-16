from xrpl.clients import JsonRpcClient
from xrpl.models.requests.account_info import AccountInfo
import json
BASE_BALANCE = 1000000000 # test wallets start out with 1000 xrp or 1b drops
JSON_RPC_URL = "https://s.altnet.rippletest.net:51234/"
client = JsonRpcClient(JSON_RPC_URL)

def retrieve_votes(wallet_address):
  acct_info = AccountInfo(
    account=wallet_address,
    ledger_index="validated",
    strict=True,
  )
  response = client.request(acct_info)
  # if response.status != "ResponseStatus.SUCCESS":
  #   print("ERROR retreiving vote count")
  # else:
  return int(response.result["account_data"]["Balance"]) - BASE_BALANCE

def create_bucket():
    from xrpl.wallet import generate_faucet_wallet
    new_wallet = generate_faucet_wallet(client, debug=True)
    return str(new_wallet.classic_address)

def cast_vote(wallet_address):
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
      destination=wallet_address,
  )

  # Sign the transaction
  from xrpl.transaction import safe_sign_and_autofill_transaction
  my_tx_payment_signed = safe_sign_and_autofill_transaction(my_tx_payment, central_wallet, client)

  # Submit and send the transaction
  from xrpl.transaction import send_reliable_submission
  tx_response = send_reliable_submission(my_tx_payment_signed, client)
