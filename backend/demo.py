from voter import *

load_accounts()

print("VOTE COUNTS BEFORE:")
print("vanilla:", retreive_votes("vanilla", "0"))
print("chocolate:", retreive_votes("chocolate", "0"))
print("swirl:", retreive_votes("swirl", "0"))
print("")

create_bucket("strawberry", "0")

cast_vote("strawberry", "0")
cast_vote("chocolate", "0")
print("")

print("VOTE COUNTS AFTER:")
print("vanilla:", retreive_votes("vanilla", "0"))
print("chocolate:", retreive_votes("chocolate", "0"))
print("swirl:", retreive_votes("swirl", "0"))
print("strawberry:", retreive_votes("strawberry", "0"))