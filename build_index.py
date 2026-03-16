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
    items = book.get('items') or book.get('sections')
    if not items:
        raise KeyError('items')

    chapter = items[0].get('Chapter') or items[0].get('chapter')
    if not chapter:
        raise KeyError('Chapter')

    chapter['content'] = info
    print(json.dumps(book))
