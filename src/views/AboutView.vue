<template>
  <div class="about">
    <h1 data-testid="about-content">
      This is an <span class="green">about</span> page
    </h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 0vh;
    display: flex;
    align-items: center;
  }
}
</style>
