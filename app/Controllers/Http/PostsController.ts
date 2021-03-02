import { Request } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index ({}: HttpContextContract) {
  }

  public async create ({request}: HttpContextContract) {

    const body = request.post()
    const post = new Post()
    post.postname = body.postname
    post.posturl = body.posturl

    // create new post
    await post.save()

    return post
  }

  public async viewPost ({request}: HttpContextContract) {

    const body = request.params()
    // view post by ID
    const result = await Post.find(body.id)

    return result
  }

  public async listPost ({}: HttpContextContract) {

    //list all post
    const result = await Post.all()

    return result

  }

  public async editPost ({request}: HttpContextContract) {

    const body = request.params()

   const result = await Post.query().where('id', body.id).update({ postname: body.postname, posturl: body.posturl, title: body.title })

    return result
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
