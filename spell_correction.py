import sys
import subprocess

try:
    from autocorrect import Speller
except ImportError:
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "autocorrect"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        from autocorrect import Speller
    except subprocess.CalledProcessError:
        print("Failed to install 'autocorrect' module. Please install it manually using 'pip install autocorrect'")
        sys.exit(1)

def correct_spelling(text):
    spell = Speller(lang='en')
    words = text.split()
    corrected_words = [spell(w) for w in words]
    corrected_text = ' '.join(corrected_words)
    return corrected_text

if __name__ == "__main__": 
    input_text = sys.argv[1]
    corrected_text = correct_spelling(input_text)
    corrected_text = corrected_text.upper()
    print(corrected_text)