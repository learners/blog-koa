import Controller from '@/common/controller'

class ArticleController extends Controller {
  /**
   * 获取所有文章
   */
  async getList() {
    const list = await this.services.articleService.getList()
    this.ctx.body = list
  }

  /**
   * 通过 id 获取文章详情
   */
  async getDetail() {
    const res = await this.services.articleService.getDetail(this.ctx.query.id)
    if (res) {
      this.ctx.body = this.successJSON(res)
    } else {
      this.ctx.body = this.errorJSON()
    }
  }
}

export default ArticleController
