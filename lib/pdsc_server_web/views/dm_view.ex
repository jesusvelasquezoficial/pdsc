defmodule PdscServerWeb.DmView do
  use PdscServerWeb, :view
  alias PdscServerWeb.DmView

  def render("index.json", %{dm: dm}) do
    %{data: render_many(dm, DmView, "dm.json")}
  end

  def render("show.json", %{dm: dm}) do
    %{data: render_one(dm, DmView, "dm.json")}
  end

  def render("dm.json", %{dm: dm}) do
    %{id: dm.id,
      fecha: dm.fecha,
      dolar: dm.dolar}
  end
end
