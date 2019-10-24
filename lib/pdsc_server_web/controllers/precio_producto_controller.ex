defmodule PdscServerWeb.PrecioProductoController do
  use PdscServerWeb, :controller

  alias PdscServer.Seguimiento
  alias PdscServer.Seguimiento.PrecioProducto

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    precioproducto = Seguimiento.list_precioproducto()
    render(conn, "index.json", precioproducto: precioproducto)
  end

  def create(conn, %{"precio_producto" => precio_producto_params}) do
    with {:ok, %PrecioProducto{} = precio_producto} <- Seguimiento.create_precio_producto(precio_producto_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.precio_producto_path(conn, :show, precio_producto))
      |> render("show.json", precio_producto: precio_producto)
    end
  end

  def show(conn, %{"id" => id}) do
    precio_producto = Seguimiento.get_precio_producto!(id)
    render(conn, "show.json", precio_producto: precio_producto)
  end

  def showForIdproducto(conn, %{"idproducto" => idproducto}) do
    precio_producto = Seguimiento.get_all_precio_producto!(idproducto)
    render(conn, "show.json", precio_producto: precio_producto)
  end

  def update(conn, %{"id" => id, "precio_producto" => precio_producto_params}) do
    precio_producto = Seguimiento.get_precio_producto!(id)

    with {:ok, %PrecioProducto{} = precio_producto} <- Seguimiento.update_precio_producto(precio_producto, precio_producto_params) do
      render(conn, "show.json", precio_producto: precio_producto)
    end
  end

  def delete(conn, %{"id" => id}) do
    precio_producto = Seguimiento.get_precio_producto!(id)

    with {:ok, %PrecioProducto{}} <- Seguimiento.delete_precio_producto(precio_producto) do
      send_resp(conn, :no_content, "")
    end
  end
end
