import re
import random
import sys

def generate_new_file(src_path, dest_path, seed, page_name):
    random.seed(seed)
    
    with open(src_path, 'r') as f:
        content = f.read()

    # Change the export name
    export_name = "BackgroundStory" + page_name
    content = content.replace("export default function BackgroundStory() {", f"export default function {export_name}() {{")
    
    # Make the canvas ID unique
    content = content.replace("story-canvas", f"story-canvas-{page_name.lower()}")
    
    # 1. Synthesize a completely new random path from top to bottom
    def generate_random_path():
        path = "M 960, -200 "
        current_y = 200
        while current_y < 9500:
            cp1_x = random.randint(100, 1800)
            cp1_y = current_y + random.randint(100, 500)
            
            cp2_x = random.randint(100, 1800)
            cp2_y = cp1_y + random.randint(100, 500)
            
            end_x = random.randint(100, 1800)
            end_y = cp2_y + random.randint(100, 500)
            
            path += f"C {cp1_x},{cp1_y} {cp2_x},{cp2_y} {end_x},{end_y} "
            current_y = end_y
            
        path += f"C {random.randint(100, 1800)},{current_y + 200} 960,9800 960,10000"
        return path
        
    new_d = generate_random_path()
    
    # Replace the exact d string in both the black and orange path elements
    # Since the original d string is identical for both, we can just find it and replace all occurrences.
    original_d_pattern = r'd="\s*M 960,\s*-200.*?960,\s*10000\s*"'
    content = re.sub(original_d_pattern, f'd="{new_d}"', content, flags=re.DOTALL)
    
    
    # 2. Mutate g transform translates for icons and dots
    def mutate_transform(match):
        x = float(match.group(1))
        y = float(match.group(2))
        scale = float(match.group(3))
        rot = float(match.group(4))
        
        new_x = random.uniform(100, 1800)
        # distribute y randomly along the 10000 height
        new_y = random.uniform(100, 9500)
        new_scale = random.uniform(0.5, 1.5)
        new_rot = random.uniform(0, 360)
        
        return f'transform="translate({new_x}, {new_y}) scale({new_scale}) rotate({new_rot})"'

    content = re.sub(r'transform="translate\(([^,]+),\s*([^)]+)\)\s*scale\(([^)]+)\)\s*rotate\(([^)]+)\)"', mutate_transform, content)
    
    # Also randomize the icon/dot IDs just in case
    content = re.sub(r'id="icon-(\d+)"', lambda m: f'id="icon-{page_name.lower()}-{m.group(1)}"', content)
    content = re.sub(r'id="dot-(\d+)"', lambda m: f'id="dot-{page_name.lower()}-{m.group(1)}"', content)
    
    content = re.sub(r"gsap\.to\('#icon-(\d+)'", lambda m: f"gsap.to('#icon-{page_name.lower()}-{m.group(1)}'", content)
    content = re.sub(r"gsap\.to\('#dot-(\d+)'", lambda m: f"gsap.to('#dot-{page_name.lower()}-{m.group(1)}'", content)

    with open(dest_path, 'w') as f:
        f.write(content)
        
if __name__ == "__main__":
    src = "src/components/BackgroundStory.tsx"
    generate_new_file(src, "src/components/BackgroundStoryAbout.tsx", 42, "About")
    generate_new_file(src, "src/components/BackgroundStoryServices.tsx", 101, "Services")
    generate_new_file(src, "src/components/BackgroundStoryPortfolio.tsx", 202, "Portfolio")
    generate_new_file(src, "src/components/BackgroundStoryBlog.tsx", 303, "Blog")
    print("Generated 4 new backgrounds")
