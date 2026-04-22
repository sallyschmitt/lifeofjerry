#!/usr/bin/env python3
"""
Validate tweet(s) for Twitter/X constraints.
Checks length, formatting, and provides improvement suggestions.
"""

import sys

def validate_tweet(text, is_thread=False):
    """Validate a single tweet and return report."""
    issues = []
    warnings = []
    tips = []
    
    length = len(text)
    
    # Check length
    if length > 280:
        issues.append(f"❌ OVER LIMIT: {length}/280 characters (over by {length - 280})")
    elif length > 250:
        warnings.append(f"⚠️  CLOSE TO LIMIT: {length}/280 characters")
    else:
        tips.append(f"✅ Length OK: {length}/280 characters")
    
    # Check formatting
    lines = text.strip().split('\n')
    
    # Check for walls of text
    if max(len(line) for line in lines) > 60 and len(lines) <= 2:
        warnings.append("⚠️  Long lines — consider adding line breaks for readability")
    
    # Check for hashtags
    hashtags = [word for word in text.split() if word.startswith('#')]
    if len(hashtags) > 2:
        warnings.append(f"⚠️  Many hashtags ({len(hashtags)}) — 1-2 is optimal")
    
    # Check for links
    if 'http' in text:
        tips.append("ℹ️  Link detected — consider putting it in a reply to avoid reach suppression")
    
    # Check for engagement hooks
    hook_words = ['?', 'here\'s', 'thread', '🧵', 'story', 'how I', 'what happened']
    has_hook = any(hook in text.lower() for hook in hook_words)
    if not has_hook and not is_thread:
        tips.append("💡 Consider adding a hook (question, curiosity gap, or 'Here's...')")
    
    # Check for CTA
    cta_words = ['follow', 'reply', 'share', 'retweet', 'check out', 'let me know', 'what do you think']
    has_cta = any(cta in text.lower() for cta in cta_words)
    if not has_cta and not is_thread:
        tips.append("💡 Consider adding a CTA to drive engagement")
    
    # Check first letter
    if text and text[0].islower():
        tips.append("💡 First letter is lowercase — intentional? (Sentence case is standard)")
    
    return {
        'length': length,
        'issues': issues,
        'warnings': warnings,
        'tips': tips
    }

def main():
    if len(sys.argv) < 2:
        print("Usage: python validate_tweet.py <text_or_file>")
        print("       cat tweet.txt | python validate_tweet.py -")
        sys.exit(1)
    
    if sys.argv[1] == '-':
        input_text = sys.stdin.read()
    elif sys.argv[1].endswith('.txt'):
        with open(sys.argv[1], 'r') as f:
            input_text = f.read()
    else:
        input_text = ' '.join(sys.argv[1:])
    
    # Handle threads (separated by --- or blank lines)
    import re
    tweets = re.split(r'\n\s*\n|\n---\n', input_text.strip())
    tweets = [t.strip() for t in tweets if t.strip()]
    
    is_thread = len(tweets) > 1
    
    for i, tweet in enumerate(tweets):
        print(f"\n{'='*50}")
        print(f"Tweet {i+1}/{len(tweets)} {'(THREAD)' if is_thread else ''}")
        print(f"{'='*50}")
        
        result = validate_tweet(tweet, is_thread=is_thread)
        
        print(f"Length: {result['length']}/280")
        print()
        
        if result['issues']:
            for issue in result['issues']:
                print(issue)
            print()
        
        if result['warnings']:
            for warning in result['warnings']:
                print(warning)
            print()
        
        if result['tips']:
            for tip in result['tips']:
                print(tip)
            print()
        
        print("Content:")
        print("-" * 50)
        print(tweet)
        print("-" * 50)
    
    print(f"\n{'='*50}")
    print(f"Validation complete: {len(tweets)} tweet(s) checked")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()
