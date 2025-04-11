import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder

print("📥 Step 1: Loading dataset...")
# Load the dataset
df = pd.read_csv("service_requests_200.csv")
print("✅ Dataset loaded successfully. Total records:", len(df))

print("\n🧹 Step 2: Cleaning text (lowercasing)...")
# Clean text - convert to lowercase
df["Email Text"] = df["Email Text"].str.lower()
print("✅ Text cleaning complete.")

print("\n🧠 Step 3: Extracting features and labels...")
# Features and Labels
texts = df["Email Text"]
labels = df["Category"]
print("✅ Feature and label extraction complete.")

print("\n🔤 Step 4: Vectorizing text using TF-IDF...")
# Vectorize the text using TF-IDF
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

print("\n🚀 Preprocessing complete. Ready for training!")
