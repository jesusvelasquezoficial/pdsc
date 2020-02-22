defmodule PdscServerWeb.GoldView do
  use PdscServerWeb, :view
  alias PdscServerWeb.GoldView

  def render("index.json", %{gold: gold}) do
    %{data: render_many(gold, GoldView, "gold.json")}
  end

  def render("show.json", %{gold: gold}) do
    %{data: render_one(gold, GoldView, "gold.json")}
  end

  def render("gold.json", %{gold: gold}) do
    %{id: gold.id,
      fecha: gold.fecha,
      dolar: gold.dolar}
  end
end
