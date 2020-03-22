<template>
  <el-main
    v-loading.body="list.loading"
    element-loading-text="拼命加载中"
  >
    <el-row class="operation-box">
      <el-button
        type="primary"
        @click="handleAdd"
      >
        添加
      </el-button>
      <router-link :to="'/'">
        <el-button>返回</el-button>
      </router-link>
      <el-dialog
        title="基础信息"
        :visible.sync="dialog.visible"
      >
        <el-form
          :model="info"
          :label-width="formLabelWidth"
        >
          <input
            type="file"
            @change="handleChangeFile"
          >
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialog.visible = false">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="confirmInfo"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
    </el-row>

    <el-table
      :data="list.data"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="文件名称"
        prop="name"
      />
      <el-table-column
        align="center"
        label="文件路径"
        prop="path"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <router-link :to="'/ass/detail?id=' + scope.row._id">
            <el-button
              type="primary"
              icon="edit"
              size="normal"
            >
              查看详情
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-main>
</template>

<script>
import { index, store } from '@/api/ass'

const defaultInfo = {
  path: ''
}
export default {
  data () {
    return {
      formLabelWidth: '15%',
      searchForm: {
        page: 1,
        size: 20
      },
      info: {},
      file: null,
      list: {
        loading: false,
        data: [],
        total: 0
      },
      dialog: {
        visible: false
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    handleSizeChange (val) {
      this.searchForm.size = val
      this.fetchData()
    },
    handleCurrentChange (val) {
      this.searchForm.page = val
      this.fetchData()
    },
    fetchData (resetPage) {
      if (resetPage === true) {
        this.page = 1
      }
      this.list.loading = true
      index({}).then(result => {
        this.list = result
        this.list.loading = false
      })
    },
    handleAdd () {
      this.dialog.visible = true
      this.info = Object.assign({}, defaultInfo)
    },
    handleChangeFile (e) {
      const files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.file = files[0]
      }
    },
    async confirmInfo () {
      await store({
        name: this.file.name,
        path: this.file.path
      })
      this.$message({
        type: 'success',
        message: '操作成功',
        duration: 1 * 1000,
        onClose: () => {
          this.dialog.visible = false
          this.fetchData()
        }
      })
    }
  }
}
</script>


<style>
</style>
