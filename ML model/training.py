import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import joblib

print("📥 Step 1: Loading dataset...")
#1st step - load the dataset 
df = pd.read_csv("service_requests_200.csv")
print("✅ Dataset loaded successfully. Total records:", len(df))

print("\n🧹 Step 2: Cleaning text (lowercasing)...")
#Clean text-converting to lower case
df["Email Text"] = df["Email Text"].str.lower()
print("✅ Text cleaning complete.")

print("\n🧠 Step 3: Extracting features and labels...")
#Feature Extraction
texts = df["Email Text"]
labels = df["Category"]
print("✅ Feature and label extraction complete.")

print("\n🔤 Step 4: Vectorizing text using TF-IDF...")
# Vectorize the text using TF-IDF
# This converts the text into a matrix of TF-IDF features
vectorizer = TfidfVectorizer(stop_words="english")
X = vectorizer.fit_transform(texts)
print("✅ Vectorization complete.")
print("TF-IDF matrix shape:", X.shape)

print("\n🏷️ Step 5: Encoding labels...")
# Encode labels to numeric format
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(labels)
print("✅ Label encoding complete.")
print("Label shape:", y.shape)
print("Classes:", label_encoder.classes_)

print("\n📊 Step 6: Splitting dataset into train and test sets...")
# Split dataset into train and test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
print("✅ Dataset split complete.")
print("Train size:", X_train.shape[0], "Test size:", X_test.shape[0])

print("\n⚙️ Step 7: Training Logistic Regression model...")
# Train the Logistic Regression model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
print("✅ Model training complete.")

print("\n🧪 Step 8: Evaluating model...")
# Predict and evaluate
y_pred = model.predict(X_test)

# Accuracy and classification report
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred, target_names=label_encoder.classes_)

print(f"\n🎯 Accuracy: {accuracy:.2f}")
print("\n📄 Classification Report:\n", report)

print("\n💾 Step 9: Saving model, vectorizer, and label encoder...")
# Save the model, vectorizer, and label encoder
joblib.dump(model, "email_classifier_model.pkl")
joblib.dump(vectorizer, "email_vectorizer.pkl")
joblib.dump(label_encoder, "label_encoder.pkl")
print("✅ All components saved successfully!")

print("\n🚀 All done! Your model is ready to be integrated with the n8n AI pipeline.")
