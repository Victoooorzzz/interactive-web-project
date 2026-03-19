import os

def test_media_queries_exist():
    try:
        with open('style.css', 'r') as f:
            content = f.read()
        assert '@media (min-width: 768px) and (max-width: 1024px)' in content
        assert '@media (max-width: 767px)' in content
        print("Test passed: Media queries found in style.css")
    except FileNotFoundError:
        print("Test failed: style.css not found")
    except AssertionError:
        print("Test failed: Media queries not found as expected in style.css")

if __name__ == '__main__':
    test_media_queries_exist()