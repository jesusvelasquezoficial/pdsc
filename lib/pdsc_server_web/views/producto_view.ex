defmodule PdscServerWeb.ProductoView do
  use PdscServerWeb, :view
  alias PdscServerWeb.ProductoView

  def render("index.json", %{productos: productos}) do
    %{data: render_many(productos, ProductoView, "producto.json")}
  end

  def render("show.json", %{producto: producto}) do
    %{data: render_one(producto, ProductoView, "producto.json")}
  end

  def render("producto.json", %{producto: producto}) do
    %{id: producto.id,
      nombre: producto.nombre,
      marca: producto.marca,
      distribuidor: producto.distribuidor,
      presentacion: producto.presentacion,
      descripcion: producto.descripcion}
  end
end
