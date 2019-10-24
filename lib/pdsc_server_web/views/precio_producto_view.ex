defmodule PdscServerWeb.PrecioProductoView do
  use PdscServerWeb, :view
  alias PdscServerWeb.PrecioProductoView

  def render("index.json", %{precioproducto: precioproducto}) do
    %{data: render_many(precioproducto, PrecioProductoView, "precio_producto.json")}
  end

  def render("show.json", %{precio_producto: precio_producto}) do
    %{data: render_one(precio_producto, PrecioProductoView, "precio_producto.json")}
  end

  def render("precio_producto.json", %{precio_producto: precio_producto}) do
    %{id: precio_producto.id,
      idproducto: precio_producto.idproducto,
      fecha: precio_producto.fecha,
      precio: precio_producto.precio}
  end
end
