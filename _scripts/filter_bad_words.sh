#!/bin/bash

WORDLIST_FILE="https://raw.githubusercontent.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/master/en"

echo "Fetching wordlist.." 1>&2

WORDLIST=$(curl -o - "$WORDLIST_FILE")

# Add custom words to the list
WORDLIST="${WORDLIST}"$'\nimgur'
WORDLIST="${WORDLIST}"$'\ndropbox'
WORDLIST="${WORDLIST}"$'\ntumblr'

SEARCH_LINES="$(cat $1)"

for i in "$WORDLIST"; do
	SEARCH_LINES=$(echo -n "$SEARCH_LINES" | grep -v "${i}")
done

echo "$SEARCH_LINES"
