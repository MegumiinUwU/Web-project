import re

# Create your models here.

regex = r'\b[A-Za-z0-9._%+-]+@(gmail|outlook|yahoo|hotmail|protonmail|stud\.fci-cu\.edu)\.(com|eg)\b'
#stud.fci-cu.edu.eg

def check(email):
    if re.fullmatch(regex, email):
        print("Valid Email")
    else:
        print("Invalid Email")

print("=========================================")

# Example usage
email = 'example@gmail.com'
print(check(email))
email = 'example@outlook.com'
print(check(email))
email = 'example@stud.fci-cu.edu.eg'
print(check(email))
email = 'example@yahoo.com'
print(check(email))