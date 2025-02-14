 <script>
        const text = "Apply Now for MBBS Abroad";
        let index = 0;
        let isDeleting = false;
        function typewriterEffect() {
            document.getElementById("moving-typewriter").textContent = text.substring(0, index);
            index = isDeleting ? index - 1 : index + 1;
            if (index === text.length + 1) isDeleting = true;
            else if (index === 0) isDeleting = false;
            setTimeout(typewriterEffect, isDeleting ? 100 : 150);
        }
        typewriterEffect();
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
