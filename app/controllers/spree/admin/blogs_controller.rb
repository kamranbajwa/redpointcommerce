class Spree::Admin::BlogsController <  Spree::Admin::ResourceController
  before_action :set_spree_blog, only: [:show, :edit, :update, :destroy, :create]
  # GET /spree/admin/blogs
  # GET /spree/admin/blogs.json
  
  def index
    @spree_blogs = Spree::Blog.all
  end
  
  # GET /spree/admin/blogs/1
  # GET /spree/admin/blogs/1.json
  
  def show
  end
  
  # GET /spree/admin/blogs/new
  def new
    @spree_blog = Spree::Blog.new
  end

  # GET /spree/admin/blogs/1/edit
  def edit
  end

  # POST /spree/admin/blogs
  # POST /spree/admin/blogs.json (Complete)
  def create
    
    @spree_blog = Spree::Blog.new(spree_blog_params)
    respond_to do |format|
       if @spree_blog.save
        format.html { redirect_to admin_blogs_path, notice: 'Spree::Blog Post was successfully created.' }
        format.json { render action: 'index', status: :created, location: @spree_blog }
       else
        format.html { render action: 'new', notice: "#{@spree_blog.errors.full_messages.first}"}
        format.json { render json: @spree_blog.errors, status: :unprocessable_entity }
       end
    end
    
  end

  # PATCH/PUT /spree/admin/blogs/1
  # PATCH/PUT /spree/admin/blogs/1.json
  def update
    respond_to do |format| 
      puts 'sdssdsd', admin_blogs_path
      if @spree_blog.update(spree_blog_params)
        format.html { redirect_to  admin_blogs_path , notice: 'Spree::Blog Post was successfully updated.' }
        format.json { render action: 'index', status: :created, location: @spree_blog }
      else
        format.html { redirect_to edit_admin_blogs_path(@spree_blog), notice: "#{@spree_blog.errors.full_messages.first}" }
        format.json { render json: @spree_blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /spree/admin/blogs/1
  # DELETE /spree/admin/blogs/1.json
  def destroy
    @spree_blog.destroy
    respond_to do |format|
      format.html { redirect_to admin_blogs_path }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spree_blog
      @spree_blog = Spree::Blog.find(params[:id])
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def spree_blog_params
      params[:blog][:permalink] = params[:blog][:title].gsub(/\s/,'-') unless params[:blog][:title].nil?
      params.require(:blog).permit(:title, :body, :summary, :visible, :published_at , :author , :permalink ,:meta_tag, :meta_description, :avatar)
    end
    
end
