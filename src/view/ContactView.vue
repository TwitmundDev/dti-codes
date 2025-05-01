
<template>
  <div class="contact-container">
    <h1>Contact me</h1>
    <ul class="contact-links">
      <li>
        <p>Add me on discord : <span style="color: var(--primary-text-color)">@Twitmund</span></p>
      </li>
      <li>
        <a href="https://github.com/TwitmundDev" target="_blank" class="contact-link">
          Check out my GitHub
        </a>
      </li>
      <li>
        <a href="mailto:twitmund@gmail.com" class="contact-link">
          Send me an email
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.contact-container {
  text-align: center;
  margin: 5rem auto 2rem;
  padding: 1rem;
  max-width: 600px;
  background-color: var(--primary-color);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contact-container h1 {
  color: var(--primary-text-color);
  margin-bottom: 1.5rem;
}

.contact-links {
  list-style: none;
  padding: 0;
}

.contact-links li {
  margin: 1rem 0;
}

.contact-link {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s;
}
p{
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.contact-link:hover {
  color: var(--third-color);
}
</style>
