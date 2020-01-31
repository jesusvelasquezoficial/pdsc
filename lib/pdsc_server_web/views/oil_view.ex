defmodule PdscServerWeb.OilView do
  use PdscServerWeb, :view
  alias PdscServerWeb.OilView

  def render("index.json", %{oil: oil}) do
    %{data: render_many(oil, OilView, "oil.json")}
  end

  def render("show.json", %{oil: oil}) do
    %{data: render_one(oil, OilView, "oil.json")}
  end

  def render("oil.json", %{oil: oil}) do
    %{id: oil.id,
      fecha: oil.fecha,
      dolar: oil.dolar}
  end
end
