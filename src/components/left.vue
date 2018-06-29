<template>
  <div class="article_list">
    <ul>
      <li v-for="i in list" :key = "i.id">
        <time v-text="i.create_at"></time>
        <router-link :to="'/content/' + i.id">
          {{ i.userName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
