import os

def test_css_animations_transitions():
    css_content = ""
    with open('style.css', 'r') as f:
        css_content = f.read()

    assert 'transition:' in css_content
    assert 'animation:' in css_content
    assert '@keyframes' in css_content
    assert ':hover' in css_content

    print("Test de animaciones y transiciones CSS superado.")

if __name__ == '__main__':
    test_css_animations_transitions()
