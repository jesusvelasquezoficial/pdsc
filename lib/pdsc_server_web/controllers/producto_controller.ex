defmodule PdscServerWeb.ProductoController do
  use PdscServerWeb, :controller

  alias PdscServer.Almacen
  alias PdscServer.Almacen.Producto

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    productos = Almacen.list_productos()
    render(conn, "index.json", productos: productos)
  end

  def create(conn, %{"producto" => producto_params}) do
    with {:ok, %Producto{} = producto} <- Almacen.create_producto(producto_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.producto_path(conn, :show, producto))
      |> render("show.json", producto: producto)
    end
  end

  def show(conn, %{"id" => id}) do
    producto = Almacen.get_producto!(id)
    render(conn, "show.json", producto: producto)
  end

  def update(conn, %{"id" => id, "producto" => producto_params}) do
    producto = Almacen.get_producto!(id)

    with {:ok, %Producto{} = producto} <- Almacen.update_producto(producto, producto_params) do
      render(conn, "show.json", producto: producto)
    end
  end

  def delete(conn, %{"id" => id}) do
    producto = Almacen.get_producto!(id)

    with {:ok, %Producto{}} <- Almacen.delete_producto(producto) do
      send_resp(conn, :no_content, "")
    end
  end
end
