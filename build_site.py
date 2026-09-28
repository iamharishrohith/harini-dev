import os, json, shutil

print('Step 1: Initializing files...')
os.makedirs('app/components', exist_ok=True)
os.makedirs('app/data', exist_ok=True)
os.makedirs('public', exist_ok=True)

if os.path.exists('HARINI K.pdf'):
    shutil.copyfile('HARINI K.pdf', 'public/Harini_K_Resume.pdf')
