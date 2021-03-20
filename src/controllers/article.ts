import Controller from '@/common/controller'

class ArticleController extends Controller {
  /**
   * 获取所有文章
   */
  async getList() {
    const list = await this.services.articleService.getList()
    this.ctx.body = this.successModel(list)
  }

  /**
   * 通过 id 获取文章详情
   */
  async getDetail() {
    const res = await this.services.articleService.getDetail(this.ctx.query.id)
    if (res) {
      this.ctx.body = this.successModel(res)
    } else {
      this.ctx.body = this.errorModel()
    }
  }
}

export default ArticleController
