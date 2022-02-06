<template>
  <p>
    <a href="/Author/a"> {{ authorName }}</a> {{ articleDate }}
  </p>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      required: true,
    },
    authorUserName: {
      type: String,
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
