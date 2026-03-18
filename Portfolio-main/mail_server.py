from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

# ── YOUR GMAIL CREDENTIALS ──
GMAIL_USER = "karthikkunduru27@gmail.com"
GMAIL_PASS = "vlkc shvf lrgz sgjn"   # paste your 16-char Gmail App Password here
TO_EMAIL   = "karthikkunduru27@gmail.com"

@app.route("/send", methods=["POST"])
def send_mail():
    data        = request.get_json()
    from_name   = data.get("from_name", "").strip()
    from_email  = data.get("from_email", "").strip()
    subject     = data.get("subject", "").strip()
    message     = data.get("message", "").strip()

    if not all([from_name, from_email, subject, message]):
        return jsonify({"status": "error", "message": "All fields are required."}), 400

    html_body = f"""
    <html><body style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;">
      <div style="background:#0a0a0a;padding:24px 32px;">
        <h2 style="color:#C9A84C;margin:0;font-size:22px;letter-spacing:2px;">NEW PORTFOLIO MESSAGE</h2>
      </div>
      <div style="padding:24px 32px;border:1px solid #eee;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:10px 0;font-weight:bold;color:#888;width:100px;">NAME</td>
              <td style="padding:10px 0;">{from_name}</td></tr>
          <tr style="border-top:1px solid #f0f0f0;">
              <td style="padding:10px 0;font-weight:bold;color:#888;">EMAIL</td>
              <td style="padding:10px 0;"><a href="mailto:{from_email}" style="color:#C9A84C;">{from_email}</a></td></tr>
          <tr style="border-top:1px solid #f0f0f0;">
              <td style="padding:10px 0;font-weight:bold;color:#888;">SUBJECT</td>
              <td style="padding:10px 0;">{subject}</td></tr>
          <tr style="border-top:1px solid #f0f0f0;">
              <td style="padding:10px 0;font-weight:bold;color:#888;vertical-align:top;">MESSAGE</td>
              <td style="padding:10px 0;line-height:1.7;">{message.replace(chr(10), "<br>")}</td></tr>
        </table>
      </div>
      <div style="padding:12px 32px;background:#f9f9f9;font-size:11px;color:#aaa;">
        Sent from your KK Portfolio contact form
      </div>
    </body></html>
    """

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"[Portfolio] {subject}"
        msg["From"]    = f"KK Portfolio <{GMAIL_USER}>"
        msg["To"]      = TO_EMAIL
        msg["Reply-To"] = from_email
        msg.attach(MIMEText(html_body, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(GMAIL_USER, GMAIL_PASS)
            server.sendmail(GMAIL_USER, TO_EMAIL, msg.as_string())

        return jsonify({"status": "success", "message": "Email sent successfully."})

    except Exception as e:
        print(f"Mail error: {e}")
        return jsonify({"status": "error", "message": "Could not send email."}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
