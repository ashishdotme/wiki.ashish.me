import pathlib
import sqlite_utils
import sys
import re
import fileinput

root = pathlib.Path(__file__).parent.resolve()

index_re = re.compile(
    r"<!\-\- index starts \-\->.*<!\-\- index ends \-\->", re.DOTALL)

def replaceAll(file,searchExp,replaceExp):
    for line in fileinput.input(file, inplace=1):
        if searchExp in line:
            line = line.replace(searchExp,replaceExp)
        sys.stdout.write(line)

if __name__ == "__main__":
    replaceAll( root / "SUMMARY.md","[wiki.ashish.me](readme.md)","[wiki.ashish.me](index.md)")
    db = sqlite_utils.Database(root / "notes.db")
    by_topic = {}
    for row in db["notes"].rows_where(order_by="updated_utc desc"):
        by_topic.setdefault(
            row["topic"].capitalize().replace("-", " "), []).append(row)
    index = ["<!-- index starts -->"]
    for topic, rows in by_topic.items():
        index.append("## {}\n".format(topic))
        for row in rows:
            index.append(
                "* [{title}]({url}) - *last updated at {date}*".format(
                    date=row["updated"][:10] , **row
                )
            )
        index.append("")
    if index[-1] == "":
        index.pop()
    index.append("<!-- index ends -->")
    if "--rewrite" in sys.argv:
        readme = root / "readme.md"
        index_txt = "\n".join(index).strip()
        readme_contents = readme.open().read()
        readme.open("w").write(index_re.sub(index_txt, readme_contents))
    else:
        print("\n".join(index))
