# mapper.py
import sys

for line in sys.stdin:
    # Split the line into words
    words = line.strip().split()
    
    # Emit each word with a count of 1
    for word in words:
        print(f"{word}\t1")

# reducer.py
import sys

current_word = None
current_count = 0

for line in sys.stdin:
    # Split the line into word and count
    word, count = line.strip().split('\t', 1)

    # Convert count to integer
    count = int(count)

    # Check if the current word is the same as the previous one
    if current_word == word:
        current_count += count
    else:
        # Output the result for the previous word
        if current_word:
            print(f"{current_word}\t{current_count}")
        
        # Update the current word and count
        current_word = word
        current_count = count

# Don't forget the last word
if current_word:
    print(f"{current_word}\t{current_count}")
