#!/bin/bash

WORDLIST_FILE="https://raw.githubusercontent.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/master/en"

echo "Fetching wordlist.." 1>&2

WORDLIST=$(curl -o - "$WORDLIST_FILE")

# Add custom words to the list
WORDLIST="${WORDLIST}"$'\nimgur'
WORDLIST="${WORDLIST}"$'\ndropbox'
WORDLIST="${WORDLIST}"$'\ntumblr'
WORDLIST="${WORDLIST}"$'\n.tell'

WORDLIST="${WORDLIST}"$'\n卐'
WORDLIST="${WORDLIST}"$'\nhitler'
WORDLIST="${WORDLIST}"$'\nseig heil'
WORDLIST="${WORDLIST}"$'\nsieg heil'
WORDLIST="${WORDLIST}"$'\n1488'

SEARCH_LINES="$(cat $1)"

for i in "$WORDLIST"; do
	SEARCH_LINES=$(echo -n "$SEARCH_LINES" | grep -v "${i}")
done

echo "$SEARCH_LINES"
