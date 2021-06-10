<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/blog/page/1')
  },
}
</script>
