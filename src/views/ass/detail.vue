<template>
  <el-main
    v-loading.body="loading"
    element-loading-text="拼命加载中"
  >
    <router-link to="/ass">
      <el-button type="primary">
        返回
      </el-button>
    </router-link>
    <el-table
      :data="list"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form
            label-position="left"
            inline
            class="demo-table-expand"
          >
            <el-form-item label="">
              <span>{{ props.row.first }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label=""
        prop="second"
      />
    </el-table>
    <router-link to="/ass">
      <el-button type="primary">
        返回
      </el-button>
    </router-link>
  </el-main>
</template>

<script>
import { find } from '@/api/ass'
const fs = require('fs')

export default {
  data () {
    return {
      loading: true,
      info: {},
      list: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.loading = true
      find(this.$route.query.id).then(doc => {
        this.info = doc
        const content = fs.readFileSync(doc.path, 'utf-8')
        const lines = content.split('\n')
        const list = []
        for (const line of lines) {
          if (line.indexOf('\\N') !== -1) {
            const usefulInfo = line.split(',,')[1].replace(/\r/, '')
            const items = usefulInfo.split('\\N{\\fs45}')
            list.push({
              first: items[0],
              second: items[1]
            })
          }
        }
        this.list = list
        this.loading = false
      })
    }
  }
}
</script>

<style></style>
