#!/usr/bin/env python3
"""
Format a thread for Twitter/X posting.
Takes a text file with a thread and formats it with proper numbering.
"""

import sys
import re

def format_thread(input_text):
    """
    Format a thread text into properly numbered tweets.
    
    Expects input where tweets are separated by blank lines or --- markers.
    """
    # Split by blank lines or --- separators
    tweets = re.split(r'\n\s*\n|\n---\n', input_text.strip())
    
    # Clean up each tweet
    tweets = [t.strip() for t in tweets if t.strip()]
    
    total = len(tweets)
    formatted = []
    
    for i, tweet in enumerate(tweets, 1):
        # Remove existing numbering like [1/8] or (1/8) at end
        tweet = re.sub(r'\s*[\[\(]\d+/\d+[\]\)]\s*$', '', tweet)
        
        # Add numbering
        numbered = f"{tweet}\n\n{i}/{total}"
        formatted.append(numbered)
    
    return formatted

def main():
    if len(sys.argv) < 2:
        print("Usage: python format_thread.py <input_file>")
        print("       cat input.txt | python format_thread.py -")
        sys.exit(1)
    
    if sys.argv[1] == '-':
        input_text = sys.stdin.read()
    else:
        with open(sys.argv[1], 'r') as f:
            input_text = f.read()
    
    tweets = format_thread(input_text)
    
    for i, tweet in enumerate(tweets, 1):
        print(f"\n{'='*50}")
        print(f"Tweet {i}/{len(tweets)} ({len(tweet)} chars)")
        print(f"{'='*50}")
        print(tweet)
        
        # Warn if over limit
        if len(tweet) > 280:
            print(f"\n⚠️  WARNING: {len(tweet)} chars (over 280 limit)")
    
    print(f"\n{'='*50}")
    print(f"Total: {len(tweets)} tweets")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()
