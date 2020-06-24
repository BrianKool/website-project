from flask import Flask
from flask import render_template

app = Flask(__name__) #__name__代表目前執行的模組

@app.route("/") #小老鼠 是函式的裝飾 圖供附加功能
def home():
    return render_template("main.html")

if __name__ == "__main__": #如果以主程式執行
    app.run() #立刻啟動伺服器