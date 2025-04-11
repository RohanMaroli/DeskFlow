from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# Load model, vectorizer, and label encoder
model = joblib.load("email_classifier_model.pkl")
vectorizer = joblib.load("email_vectorizer.pkl")
label_encoder = joblib.load("label_encoder.pkl")

app = FastAPI()

# Define input format
class EmailInput(BaseModel):
    email_text: str

@app.post("/classify")
def classify_email(data: EmailInput):
    email = data.email_text
    vectorized = vectorizer.transform([email])
    prediction = model.predict(vectorized)
    category = label_encoder.inverse_transform(prediction)[0]
    return {"predicted_category": category}
