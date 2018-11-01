<template>
  <div class="homepage">
    <music></music>
    <div class="content">
      <div class="avatar">
        <img
          src="https://ws4.sinaimg.cn/large/006tNbRwly1fwswdbni2nj30hs0hsgn9.jpg"
          class="avatar-item">
      </div>
      <h1 class="description">斯塔夫部落格</h1>
      <ul class="tab">
        <li class="tab-item">
          <span class="tab-link">Blog:https://stavtop.club</span>
        </li>
        <li class="tab-item">
          <span class="tab-link">QQ:617946852</span>
        </li>
        <li class="tab-item">
          <span class="tab-link">GitHub:https://github.com/stavyan</span>
        </li>
        <li class="tab-item">
          <span class="tab-link">坚持一件平凡的事情久了，就会变得不平凡。</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Music from '@/components/music'
import { share } from '@/utils/share'

export default {
  onShareAppMessage () {
    return share()
  },
  components: {
    Music
  }
}
</script>
<style>
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    text-align: center;
  }

  .avatar {
    margin-bottom: 20px;
  }

  img {
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;
    background: #FFF;
    box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 5px, rgba(0, 0, 0, 0.1) 0 0 5px 4px;
    transition: transform .4s ease-out;
  }

  img:hover {
    transform: rotate(360deg);
  }

  .description {
    margin-bottom: 20px;
    font-weight: bold;
    color: #6289ad;
    font-size: 24px;
  }

  .tab .tab-item {
    height: 40px;
    line-height: 40px;
    text-align: center;
    list-style: none;
  }

  .tab-link {
    padding: 10px;
    color: #9caebf;
    font-size: 14px;
    font-weight: 600;
  }

  a {
    background: none;
  }

  a:hover {
    color: #6289ad;
    font-weight: 700;
    background: none;
  }
</style>
