import pandas as pd
import pyautogui
import pyperclip
import time
import webbrowser

excel_yolu = r'C:\Users\PC\Desktop\su arıtma\liste.xlsx'
df = pd.read_excel(excel_yolu)
mesaj = "Merhaba, su arıtma teknik servisimizle ilgili bilgi almak için bizimle iletişime geçebilirsiniz."

webbrowser.open("https://web.whatsapp.com")
print("WhatsApp Web açılıyor. Lütfen giriş yap ve ardından bekle.")
time.sleep(30)

for numara in df['numara']:
    numara = str(numara).strip()
    if numara.startswith("0"):
        numara = "90" + numara[1:]
    elif numara.startswith("+"):
        numara = numara[1:]
    elif not numara.startswith("90"):
        numara = "90" + numara

    print(f"{numara} numarasına mesaj gönderiliyor...")

    pyautogui.hotkey('ctrl', 'alt', '/')
    time.sleep(2)
    pyautogui.typewrite(numara)
    time.sleep(2)
    pyautogui.press('enter')
    time.sleep(5)

    # Türkçe karakterleri bozmadan mesaj gönderimi
    pyperclip.copy(mesaj)
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(1)
    pyautogui.press('enter')
    print("Mesaj gönderildi.")

    time.sleep(5)

print("Tüm mesajlar başarıyla gönderildi.")
