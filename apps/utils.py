import os
import uuid

def custom_upload_path(instance, filename):
    """Генерация имен для файлов для upload_to в ImageField"""
    ext = os.path.splitext(filename)[1]
    unique_filename = f"{uuid.uuid4()}{ext}"
    return f"{instance.__class__.__name__}/{unique_filename}"