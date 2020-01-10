class Api::ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index()
    #parametros por defectos
    per_page = params[:per_page]
    number_page = params[:page]

    per_page ||= 10
    number_page ||= 1 

    articles = Article.paginate(page: number_page, per_page: per_page).order('created_at DESC')
    all_articles = Article.count

    render json: { articles: articles, total: all_articles, articles_per_page: per_page }
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      render json: @article, status: :ok
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end
  
  private
    def article_params
      params.require(:article).permit(:title, :content)
    end
end
