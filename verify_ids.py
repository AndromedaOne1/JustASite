import re

# Read index.html
with open('/Users/interstellar/JustASite/index.html', 'r') as f:
    html = f.read()

# Read faq.html (since main.js is also used there)
with open('/Users/interstellar/JustASite/faq.html', 'r') as f:
    faq_html = f.read()

# Read tour360.html
with open('/Users/interstellar/JustASite/tour360.html', 'r') as f:
    tour_html = f.read()

# Read main.js
with open('/Users/interstellar/JustASite/assets/js/main.js', 'r') as f:
    js = f.read()

# Combine HTML for ID checking
all_html = html + faq_html + tour_html

# Find all IDs used in JS with getElementById - only simple IDs (no spaces, no combinators)
# Pattern: getElementById('id') or $('#id') or $('#id')
id_patterns = [
    r'getElementById\([\'"]([^\'"\s>+~]+)[\'"]\)',
    r'\$\("#([^"\s>+~]+)"\)',
    r"\$\('#([^'\s>+~]+)'\)",
    r'\$\(\'#([^\'\s>+~]+)\'\)',
]

all_js_ids = set()
for pattern in id_patterns:
    matches = re.findall(pattern, js)
    all_js_ids.update(matches)

# Find all IDs in HTML
html_ids = set(re.findall(r'id=[\'"]([^\'"]+)[\'"]', all_html))

print('=== IDs used in JS (getElementById/$ with simple ID) ===')
for id in sorted(all_js_ids):
    status = 'FOUND' if id in html_ids else 'MISSING'
    print(f'  {id}: {status}')

print()
print('=== IDs in HTML but not used in JS ===')
unused = html_ids - all_js_ids
for id in sorted(unused):
    print(f'  {id}')

print()
missing = all_js_ids - html_ids
if missing:
    print('=== MISSING IDs (CRITICAL) ===')
    for id in sorted(missing):
        print(f'  {id}')
else:
    print('=== ALL JS IDs FOUND IN HTML ===')