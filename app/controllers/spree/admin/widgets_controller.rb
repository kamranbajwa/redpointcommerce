class Spree::Admin::WidgetsController < Spree::Admin::ResourceController
  before_action :get_widgets, only: [:index, :new]

  def index
  end

  def new
    @widget =  Spree::Widget.new
  end

	def create
    @widget = Spree::Widget.new(widget_params)
    respond_to do |format|
      if @widget.save
        flash[:success] = "Widget was successfully created."
        format.html { redirect_to admin_widgets_path}
        format.json { render action: 'index', status: :created, location: @widget }
      else
        flash[:error] = "This widget has already created"
        format.html { render action: 'new'}
        format.json { render json: @widget.errors, status: :unprocessable_entity }
      end
    end
	end

  def edit
    @widget = Spree::Widget.find(params[:id])
  end

  def update
    respond_to do |format|
      if @widget.update(widget_params)
        flash[:success] = "Widget was successfully Updated."
        format.html { redirect_to admin_widgets_path}
        format.json { render action: 'index', status: :created, location: @widget }
      else
        flash[:error] = "This widget has already created"
        format.html { redirect_to edit_admin_widget_path(@widget)}
        format.json { render json: @widget.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @widget = Spree::Widget.find(params[:id])
    if @widget.destroy
      flash[:notice] = "Successfully Deleted"
      redirect_to admin_widgets_path
    end
  end

  private

  def widget_params
    params.require(:widget).permit(:name, :widget_characteristics, :widget_order, :check)
  end

  def get_widgets
    @widgets =  Spree::Widget.all
  end
end
