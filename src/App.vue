<script setup lang="ts"></script>

<template>
  <suspense>
    <template #default>
      <RouterView id="router" />
    </template>
    <template #fallback>
      <LoadingView />
    </template>
  </suspense>
</template>

<style>
* {
  font-size: large;
}
.my-row {
  margin: 5px 5px 10px 5px;
  border-radius: 5px;
  /* padding: 25px 10px 10px 10px; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-col {
  margin-bottom: 10px;
  /* border: 1px solid red; */
}
a {
  color: black;
  text-decoration: none;
}
</style>
