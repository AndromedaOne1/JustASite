import re

with open('/Users/interstellar/JustASite/assets/js/main.js', 'r') as f:
    js = f.read()

# Find all $() and $$() calls with string literals
selectors = set()
for m in re.finditer(r'\$\([\'"]([^\'"]+)[\'"]', js):
    selectors.add(m.group(1))
for m in re.finditer(r'\$\$\([\'"]([^\'"]+)[\'"]', js):
    selectors.add(m.group(1))

print('Selectors found:', len(selectors))
for sel in sorted(selectors):
    print(f'  {sel}')