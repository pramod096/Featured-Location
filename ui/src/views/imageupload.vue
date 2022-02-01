<template>
<div>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="photo" id="file" />
    <input type="text" name="fname" />
    <input type="submit" value="Submit" />
  </form>
</div>
</template>

<script>


export default {
  name: "imageUpload",

};
</script>

