import json
import sys
import os
import pathlib
import shutil

root = pathlib.Path(__file__).parent.resolve()

if __name__ == '__main__':
    with open('wiki.txt', 'r') as file:
        info = file.read().rstrip('\n')
    if len(sys.argv) > 1:
        if sys.argv[1] == "supports": 
            sys.exit(0)

    context, book = json.load(sys.stdin)
    book['sections'][0]['Chapter']['content'] = info
    print(json.dumps(book))
