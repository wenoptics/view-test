<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!--        <q-btn-->
        <!--          flat-->
        <!--          dense-->
        <!--          round-->
        <!--          @click="leftDrawerOpen = !leftDrawerOpen"-->
        <!--          icon="menu"-->
        <!--          aria-label="Menu"-->
        <!--        />-->

        <q-toolbar-title>
          Smart 8E
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!--    <q-drawer-->
    <!--      v-model="leftDrawerOpen"-->
    <!--      show-if-above-->
    <!--      bordered-->
    <!--      content-class="bg-grey-2"-->
    <!--    >-->
    <!--      &lt;!&ndash;      <q-list>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item-label header>Essential Links</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-icon name="school" />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label>Docs</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label caption>quasar.dev</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item&ndash;&gt;-->
    <!--      &lt;!&ndash;          clickable&ndash;&gt;-->
    <!--      &lt;!&ndash;          tag="a"&ndash;&gt;-->
    <!--      &lt;!&ndash;          target="_blank"&ndash;&gt;-->
    <!--      &lt;!&ndash;          href="https://github.quasar.dev"&ndash;&gt;-->
    <!--      &lt;!&ndash;        >&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-icon name="code" />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label>Github</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label caption>github.com/quasarframework</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item&ndash;&gt;-->
    <!--      &lt;!&ndash;          clickable&ndash;&gt;-->
    <!--      &lt;!&ndash;          tag="a"&ndash;&gt;-->
    <!--      &lt;!&ndash;          target="_blank"&ndash;&gt;-->
    <!--      &lt;!&ndash;          href="https://chat.quasar.dev"&ndash;&gt;-->
    <!--      &lt;!&ndash;        >&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-icon name="chat" />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label>Discord Chat Channel</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label caption>chat.quasar.dev</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item&ndash;&gt;-->
    <!--      &lt;!&ndash;          clickable&ndash;&gt;-->
    <!--      &lt;!&ndash;          tag="a"&ndash;&gt;-->
    <!--      &lt;!&ndash;          target="_blank"&ndash;&gt;-->
    <!--      &lt;!&ndash;          href="https://forum.quasar.dev"&ndash;&gt;-->
    <!--      &lt;!&ndash;        >&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-icon name="record_voice_over" />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label>Forum</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label caption>forum.quasar.dev</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item&ndash;&gt;-->
    <!--      &lt;!&ndash;          clickable&ndash;&gt;-->
    <!--      &lt;!&ndash;          tag="a"&ndash;&gt;-->
    <!--      &lt;!&ndash;          target="_blank"&ndash;&gt;-->
    <!--      &lt;!&ndash;          href="https://twitter.quasar.dev"&ndash;&gt;-->
    <!--      &lt;!&ndash;        >&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-icon name="rss_feed" />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label>Twitter</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label caption>@quasarframework</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <q-item&ndash;&gt;-->
    <!--      &lt;!&ndash;          clickable&ndash;&gt;-->
    <!--      &lt;!&ndash;          tag="a"&ndash;&gt;-->
    <!--      &lt;!&ndash;          target="_blank"&ndash;&gt;-->
    <!--      &lt;!&ndash;          href="https://facebook.quasar.dev"&ndash;&gt;-->
    <!--      &lt;!&ndash;        >&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-icon name="public" />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;          <q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label>Facebook</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;            <q-item-label caption>@QuasarFramework</q-item-label>&ndash;&gt;-->
    <!--      &lt;!&ndash;          </q-item-section>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </q-item>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </q-list>&ndash;&gt;-->
    <!--    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
