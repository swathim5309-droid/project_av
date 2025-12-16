from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

# Load the pickle model - Make sure 'ensemble_model.pkl' is in the same directory
try:
    with open("ensemble_model.pkl", "rb") as f:
        model = pickle.load(f)
except FileNotFoundError:
    print("ERROR: ensemble_model.pkl not found. Please place the model file in the 'backend' directory.")
    model = None

app = FastAPI()

# --- CORS Configuration ---
# This allows your frontend (running on http://localhost:9002) to talk to this backend.
origins = [
    "http://localhost:9002",
    # In a real production environment, you would add your deployed frontend's URL here.
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --- End CORS Configuration ---


class InputData(BaseModel):
    # Expects a flat list of features from the frontend
    features: list[float]

@app.post("/predict")
def predict(data: InputData):
    if model is None:
        return {"error": "Model not loaded. Please check the backend server logs."}
    
    try:
        # The number of features should match what your model was trained on.
        # This example assumes the same shape you provided.
        features_array = np.array(data.features)
        
        # Adapt to your model's expected input shapes
        # You may need to adjust these reshape values based on your model's exact requirements
        X_ml = features_array.reshape(1, -1)
        # The example reshape(1, 20, 8) requires 160 features. Adjust as needed.
        # X_dl = features_array.reshape(1, 20, 8) 

        # This example just uses the ML input shape.
        # If your model takes two inputs, modify the call like: `model.predict(X_ml, X_dl)`
        prediction = model.predict(X_ml)
        
        # Assuming the prediction is a number, we cast it to int.
        return {"prediction": int(prediction[0])}
    except Exception as e:
        return {"error": f"An error occurred during prediction: {str(e)}"}
