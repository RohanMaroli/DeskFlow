import joblib

# Load the saved model, vectorizer, and label encoder
model = joblib.load("email_classifier_model.pkl")
vectorizer = joblib.load("email_vectorizer.pkl")
label_encoder = joblib.load("label_encoder.pkl")

# Ask user for input
test_email = input("Please enter the service request email: ")

# Preprocess the test email (same as during training)
test_email_vectorized = vectorizer.transform([test_email])

# Predict the category of the email
prediction = model.predict(test_email_vectorized)

# Decode the prediction back to the category
predicted_category = label_encoder.inverse_transform(prediction)

print(f"\nPredicted Category: {predicted_category[0]}")
