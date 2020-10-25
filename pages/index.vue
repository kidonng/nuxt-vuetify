<template>
  <div>
    <v-app>
      <div>
        <v-alert border="top" color="red lighten-2" dark>
          I'm an alert with a top border and red color
        </v-alert>
        <v-alert border="right" color="blue-grey" dark>
          I'm an alert with a right border and blue-grey color
        </v-alert>
        <v-alert border="bottom" color="pink darken-1" dark>
          I'm an alert with a bottom border and pink color
        </v-alert>
        <v-alert border="left" color="indigo" dark>
          I'm an alert with a border left type info
        </v-alert>
      </div>
      <v-row align="center" justify="space-around">
        <v-btn> Normal </v-btn>
        <v-btn color="primary"> Primary </v-btn>
        <v-btn color="error"> Error </v-btn>
        <v-btn disabled> Disabled </v-btn>
      </v-row>
      <div class="text-center">
        <v-chip class="ma-2"> Default </v-chip>

        <v-chip class="ma-2" color="primary"> Primary </v-chip>

        <v-chip class="ma-2" color="secondary"> Secondary </v-chip>

        <v-chip class="ma-2" color="red" text-color="white"> Red Chip </v-chip>

        <v-chip class="ma-2" color="green" text-color="white">
          Green Chip
        </v-chip>
      </div>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
})
</script>
